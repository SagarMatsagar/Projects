let inputArray = [
    {name: 'Amber', batch: 'Batch 12', likesIceCream: false},
    {name: 'Pratik', batch: 'Batch 12', likesIceCream: true},
    {name: 'Charan', batch: 'Batch 11', likesIceCream: false},
    {name: 'Dhanashree', batch: 'Batch 11', likesIceCream: true},
    {name: 'Anirban', batch: 'Batch 10', likesIceCream: false}
  ]

  let Step1 = inputArray.map(student=>{
      if(student.likesIceCream  === true && student.batch === 'Batch 11')
        return student.name        
  })
  let whoLikeIceCreamB11 = Step1.filter(student=>student)

  console.log(whoLikeIceCreamB11)