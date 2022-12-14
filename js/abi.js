const EXP001 = [
   {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
   },
   {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
   },
   {
      constant: false,
      inputs: [
         {
            internalType: 'address payable',
            name: '_to',
            type: 'address',
         },
         {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
         },
      ],
      name: 'withdrawMoney',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
   },
   {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
         {
            internalType: 'address',
            name: '',
            type: 'address',
         },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
   },
]
