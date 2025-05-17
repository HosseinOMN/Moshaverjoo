import { specialties } from './specialtiesData.js';


const doctors = [
    {
      id: 1,
      image: require('./img/Ali-Rezaei-001.jpg'),
      name: 'دکتر علی رضایی',
      specialty: [
        ...specialties.filter(specialty => specialty.title.includes('روانپزشک')).map(specialty => specialty.title),
        ...specialties.filter(specialty => specialty.title.includes('روانکاو')).map(specialty => specialty.title)
      ],
      medicalCode: '12345',
      address: 'تهران،منیریه',
      exact_address: 'تهران،منیریه ، ساختمان پزشکان نوری ، طبقه 3 ، واحد 2',
      number: '09123456789',
      secondery_number: '02135443532',
      city: 'تهران',
      num_comment: 23,
      avg_rate: 4.8,
    },
    {
      id: 2,
      image: require('./img/Ali-Rezaei-001.jpg'),
      name: 'دکتر مارال افشار',
      specialty: [
        ...specialties.filter(specialty => specialty.title.includes('روانشناس کودک')).map(specialty => specialty.title),
        ...specialties.filter(specialty => specialty.title.includes('مشاور تحصیلی')).map(specialty => specialty.title)
      ],
      medicalCode: '98765',
      address: 'تهران،فرشته',
      exact_address: 'تهران،فرشته، خیابان نیلوفر، طبقه 2، واحد 3',
      number: '09123451234',
      secondery_number: '02176234234',
      city: 'تهران',
      num_comment: 45,
      avg_rate: 4.7,
    },
    {
      id: 3,
      image: require('./img/Ali-Rezaei-001.jpg'),
      name: 'دکتر سینا جعفری',
      specialty: [
        ...specialties.filter(specialty => specialty.title.includes('زوج درمانگر')).map(specialty => specialty.title)
      ],
      medicalCode: '34567',
      address: 'شیراز،معالی آباد',
      exact_address: 'شیراز،معالی آباد، برج پزشکان، طبقه 4، واحد 1',
      number: '09387654321',
      secondery_number: '07132345678',
      city: 'شیراز',
      num_comment: 30,
      avg_rate: 3.8,
    },
    {
      id: 4,
      image: require('./img/Ali-Rezaei-001.jpg'),
      name: 'دکتر سارا کریمی',
      specialty: [
        ...specialties.filter(specialty => specialty.title.includes('روانکاو')).map(specialty => specialty.title),
        ...specialties.filter(specialty => specialty.title.includes('مشاوره فردی')).map(specialty => specialty.title)
      ],
      medicalCode: '65432',
      address: 'اصفهان،دولت آباد',
      exact_address: 'اصفهان،دولت آباد، خیابان شریعتی، ساختمان پزشکان پاستور، طبقه 1',
      number: '09129876543',
      secondery_number: '03132145678',
      city: 'اصفهان',
      num_comment: 50,
      avg_rate: 4.4,
    },
    {
      id: 5,
      image: require('./img/Ali-Rezaei-001.jpg'),
      name: 'دکتر نیما خزائی',
      specialty: [
        ...specialties.filter(specialty => specialty.title.includes('مشاور ازدواج')).map(specialty => specialty.title),
      ],
      medicalCode: '64875',
      address: 'اصفهان،دولت آباد',
      exact_address: 'اصفهان،دولت آباد، خیابان شریعتی، ساختمان پزشکان پاستور، طبقه 1',
      number: '09129876543',
      secondery_number: '03132145678',
      city: 'اصفهان',
      num_comment: 17,
      avg_rate: 4.6,
    },
  ];
  
  
  export default doctors;
  