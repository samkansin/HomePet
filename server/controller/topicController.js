import { ManageTopics } from '../model/topic.js';

export const getTopicsList = (req, res) => {
  ManageTopics.list().then((result) => res.json(result));
};

export const searchTopics = (req, res) => {
  const { search } = req.query;
  ManageTopics.searchAll(search, req.body.select).then((result) =>
    res.json(result)
  );
};

export const addTopic = (req, res) => {
  if (req.body?.length !== 0) {
    ManageTopics.add(req.body).then(() => {
      return res.send({ status: 'Create Topic Successfully' });
    });
  }
  return res.send({ status: 'Not Create Topic' });
};

export const removeTopic = (req, res) => {
  ManageTopics.remove(req.body)
    .then(() => {
      return res.status(200).send({ status: 'Remove Successfully' });
    })
    .catch(() => {
      return res.status(404).send({
        error: 'Topic not found',
      });
    });
};
