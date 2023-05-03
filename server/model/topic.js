let AllTopics = [
  { topic: 'Cat', used: 2431 },
  { topic: 'Dog', used: 3694 },
  { topic: 'น้องแมวหมาหาบ้าน', used: 20000 },
];

let userTopic = [];

export let ManageTopics = {
  list: () => {
    return new Promise((resolve, reject) => {
      AllTopics.sort((a, b) => b.used - a.used);
      if (userTopic.length === 0) resolve(AllTopics);
      else {
        resolve([...new Set([...userTopic, ...AllTopics])]);
      }
    });
  },
  searchAll: (searchTopic, filterUserSelect) => {
    return new Promise((resolve, reject) => {
      let AllTopicFilter = AllTopics.filter(
        (item) => !filterUserSelect.includes(item.topic)
      );
      resolve(
        AllTopicFilter.filter((item) => {
          return item.topic.toLowerCase().includes(searchTopic.toLowerCase());
        })
      );
    });
  },
  search: (topic) => {
    return new Promise((resolve, reject) => {
      let search = AllTopics.findIndex(
        (item) => item.topic.toLowerCase() === topic.toLowerCase()
      );
      if (search >= 0) resolve(AllTopics[search]);
      else reject(null);
    });
  },
  add: (topic) => {
    return new Promise((resolve, reject) => {
      topic.forEach((topic) => {
        let exist = ManageTopics.search(topic);
        exist
          .then((data) => {
            if (
              !userTopic.find(
                (item) => item.topic.toLowerCase() === data.topic.toLowerCase()
              )
            ) {
              userTopic.unshift(data);
            }
            data.used = data.used + 1;
            resolve(1);
          })
          .catch((error) => {
            AllTopics.push({ topic: topic, used: 0 });
            userTopic.push(AllTopics[AllTopics.length - 1]);
            resolve(AllTopics[AllTopics.length - 1]);
          });
      });
    });
  },
  remove: (topic) => {
    return new Promise((resolve, reject) => {
      topic.forEach((topic) => {
        let search = ManageTopics.search(topic);
        search
          .then((data) => {
            console.log(data);
            if (data.used === 0) {
              AllTopics = AllTopics.filter((item) => item.topic !== data.topic);
              console.log(AllTopics);
              resolve(1);
            } else {
              data.used = data.used - 1;
            }
          })
          .catch((error) => reject(`don't have topic ${topic}`));
      });
    });
  },
};
