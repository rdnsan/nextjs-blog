const data = [
  {
    name: 'Felix Ruby',
    age: 22,
    address: {
      city: 'Bandung',
      country: 'Indonesia',
    },
    hobby: 'Gaming',
  },
  {
    name: 'Liam Cole',
    age: 28,
    address: {
      city: 'Boston',
      country: 'United States',
    },
    hobby: 'Coding',
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
