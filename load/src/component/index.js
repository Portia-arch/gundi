import React from 'react';
import Presentation from './presentation.js';

const fakeData = [
  {
        rows: [
          {
            deadline: '07/03/18',
            completion: '15/03/18',
            compenency: 'Competent'
          },
          {
            deadline: '25/03/18',
            completion: '22/03/18',
            compenency: 'NYC'
          },
          {
            deadline: '01/04/18',
            completion: '31/04/18',
            compenency: 'Competent'
          },
          {
            deadline: "07/04/18",
            completion: '15/04/18',
            compenency: 'Competent'
          },
          {
            deadline: '25/04/18',
            completion: '25/04/18',
            compenency: 'NYC'
          },
          {
            deadline: '07/05/18',
            completion: '11/05/18',
            compenency: 'Competent'
          },
          {
            deadline: '14/03/18',
            completion: '15/03/18',
            compenency: 'Competent'
          },
        ]
    },
  {
    rows: [
      {
        deadline: '07/03/18',
        completion: '10/03/18',
        compenency: 'NYC'
      },
      {
        deadline: '25/03/18',
        completion: '25/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '01/04/18',
        completion: '28/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/04/18',
        completion: '15/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/04/18',
        completion: '25/04/18',
        compenency: 'NYC'
      },
      {
        deadline: '07/05/18',
        completion: '07/05/18',
        compenency: 'NYC'
      },
      {
        deadline: '14/03/18',
        completion: '15/03/18',
        compenency: 'Competent'
      },
    ]
  },
  {
    rows: [
      {
        deadline: '07/03/18',
        completion: '7/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/03/18',
        completion: '20/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '01/04/18',
        completion: '01/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/04/18',
        completion: '12/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/04/18',
        completion: '25/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/05/18',
        completion: '07/05/18',
        compenency: 'Competent'
      },
      {
        deadline: '14/03/18',
        completion: '15/03/18',
        compenency: 'Competent'
      },
    ]
  },
  {
    rows: [
      {
        deadline: '07/03/18',
        completion: '7/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/03/18',
        completion: '20/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '01/04/18',
        completion: '01/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/04/18',
        completion: '12/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/04/18',
        completion: '25/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/05/18',
        completion: '07/05/18',
        compenency: 'Competent'
      },
      {
        deadline: '14/03/18',
        completion: '15/03/18',
        compenency: 'Competent'
      },
    ]
  },
  {
    rows: [
      {
        deadline: '07/03/18',
        completion: '7/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/03/18',
        completion: '20/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '01/04/18',
        completion: '01/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/04/18',
        completion: '12/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/04/18',
        completion: '25/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/05/18',
        completion: '07/05/18',
        compenency: 'Competent'
      },
      {
        deadline: '14/03/18',
        completion: '15/03/18',
        compenency: 'Competent'
      },
    ]
  },
  {
    rows: [
      {
        deadline: '07/03/18',
        completion: '7/03/18',
        compenency: 'NYC'
      },
      {
        deadline: '25/03/18',
        completion: '20/03/18',
        compenency: 'Competent'
      },
      {
        deadline: '01/04/18',
        completion: '01/04/18',
        compenency: 'NYC'
      },
      {
        deadline: '07/04/18',
        completion: '12/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '25/04/18',
        completion: '25/04/18',
        compenency: 'Competent'
      },
      {
        deadline: '07/05/18',
        completion: '07/05/18',
        compenency: 'Competent'
      },
      {
        deadline: '14/03/18',
        completion: '15/03/18',
        compenency: 'Competent'
      },
    ]
  },
  {
    rows: [
      [
      '07/03/18',
      '7/03/18',
      'Competent'
      ],
      [
      '25/03/18',
      '20/03/18',
      'NYC'
      ],
      [
      '01/04/18',
      '01/04/18',
      'Competent'
      ],
      [
      '07/04/18',
      '12/04/18',
      'Competent'
      ],
      [
        '25/04/18',
        '25/04/18',
        'Competent'
    ],
      [
      '07/05/18',
      '07/05/18',
      'Competent'
      ],
      [
      '14/03/18',
      '15/03/18',
      'Competent'
      ],
    ]
  }
];

// function createData(deadline, completion, competency) {
//   return { deadline, completion, competency };
// }

// const rows = [
//   createData('14/03/18', '15/03/18', 'NYC'),
//   createData('15/03/18', 4.3, 'Frozen yoghurt'),
//   createData(24, 6.0, 'Cupcake'),
//   createData(1, 4.3, 'Cupcake'),
//   createData(49, 3.9, 'Cupcake'),
//   createData(49, 3.9, 'Cupcake'),
//   createData(49, 3.9, 'Cupcake'),
// ];

function RecruitTable(props) {
  return <Presentation rows={fakeData} />;
}

export default RecruitTable;
