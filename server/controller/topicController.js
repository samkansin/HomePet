import TopicDB from '../model/TopicDB.js';

const projection_id_v = { _id: 0, __v: 0 };

export const getTopicsList = (req, res) => {
  TopicDB.find({}, projection_id_v)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).send({ error: 'Database Server Error' }));
};

export const searchTopics = (req, res) => {
  const { search } = req.query;

  //get array of topic that user selected
  let topicUserSelected = req.body.select;
  //first condition remove topic that user selected and query topic that user search
  TopicDB.find(
    {
      $and: [
        { topic: { $nin: topicUserSelected } },
        { topic: { $regex: search, $options: 'i' } },
      ],
    },
    projection_id_v
  )
    .sort({ used: -1 })
    .then((result) => {
      console.log(result);
      res.json(result);
    });
};

export const addTopic = async (req, res) => {
  if (req.body?.length !== 0) {
    let response = [];
    let topics = req.body;
    console.log(req.body);
    for (let topic of topics) {
      await TopicDB.findOneAndUpdate(
        { topic: topic },
        { $inc: { used: 1 } },
        { projection: projection_id_v, upsert: true, new: true }
      )
        .then((result) => {
          response.push(result);
        })
        .catch((error) => {
          res
            .status(500)
            .send({ status: `Internal Database Server Error`, error: error });
        });
    }

    res.json({ status: 'add topic successfully', topic: response });
  } else return res.send({ status: 'Not have topic to add' });
};

export const removeTopic = (req, res) => {
  if (req.body?.length !== 0) {
    let topics = req.body;
    TopicDB.deleteMany({
      $and: [{ topic: { $in: topics } }, { used: 0 }],
    })
      .then((response) => {
        if (response.acknowledged && response.deletedCount > 0)
          return res.status(200).send({ status: 'Delete topic successfully' });
        else {
          TopicDB.updateMany(
            {
              $and: [{ topic: { $in: topics } }, { used: { $gt: 0 } }],
            },
            { $inc: { used: -1 } }
          ).then((result) => {
            if (result.modifiedCount > 0)
              return res.json({ status: 'Delete topic successfully' });
            else {
              return res
                .status(200)
                .send({ status: "Topic doesn't exist or already deleted" });
            }
          });
        }
      })
      .catch((error) => {
        return res.status(404).send({ error: error.name });
      });
  } else return res.send({ status: 'Not have topic to remove' });
};
