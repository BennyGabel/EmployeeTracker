const data = [
    {
    location: "1A",
    uId: 1,
    notNeededData: null,
    components: [
      {
        modelId: "7654",
        partNumber: "P1",
        description: "It's a desk.",
        notNeededData: null,
        location: "office1"
      },
      {
        modelId: "1234",
        part: "P2",
        description: "It's a chair",
        notNeededData: null,
        location: "office1"
      }
    ]
  },
  {
    location: "2B",
    uKeyId: 1,
    notNeededData: null,
    components: [
      {
        modelId: "9876",
        partNumber: "P8",
        description: "The best headrest",
        notNeededData: null,
        location: "office2"
      },
      {
        modelId: "7463",
        partNumber: "P5",
        description: "The stool",
        notNeededData: null,
        location: "office2"
      }
    ]
  }
];

const getNewDataSet = (data) => {
    let newArr = [];
    let obj = {};
    let id = 1;
    for (let i = 0; i < data.length; i++) {
        const currObj = data[i];
        currObj.components.forEach((comp) => {
             obj["id"] = id;
             obj["uId"] = currObj.uId || currObj.uKeyId;
             obj["location"] = data[i].location;
             obj["modelId"] = comp.modelId;
             obj["partNumber"] = comp.partNumber;
             obj["description"] = comp.description;
      newArr.push(obj);
      obj = {};
      id++;
  })}

  console.log("newArr",newArr)

  console.log(newArr[0]['location'])
  console.log(newArr[1]['location'])

  console.log(Object.values(arrayLikeObj1 ))

}

getNewDataSet(data)

  