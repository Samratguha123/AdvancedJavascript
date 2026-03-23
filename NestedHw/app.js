const students = [
  {
    id: 1,
    name: "Rahul",
    subjects: [
      {
        name: "Math",
        exams: [
          { type: "mid", score: 40 },
          { type: "final", score: 45 }
        ]
      },
      {
        name: "English",
        exams: [
          { type: "mid", score: 30 },
          { type: "final", score: 40 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Amit",
    subjects: [
      {
        name: "Math",
        exams: [
          { type: "mid", score: 20 },
          { type: "final", score: 30 }
        ]
      },
      {
        name: "English",
        exams: [
          { type: "mid", score: 45 },
          { type: "final", score: 50 }
        ]
      }
    ]
  }
];

for(let arr of students){
    console.log(arr.id);
    console.log(arr.name);

    let subArray=arr.subjects;
    for(let sub of subArray){
        console.log(sub.name);

        let examArray=sub.exams;
        for(let exam of examArray){
            let {type,score}=exam;
            console.log(type);
            console.log(score);
            
            
        }
        
    }
console.log("************************");

    
}



