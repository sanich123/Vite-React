import { InitialState } from 'src/utils/types/form-types';
import { getFormattedDate } from '../date-utils';

export const enum Warnings {
  inputText = 'This field should not be empty',
  inputFile = 'You are required to add a file',
  dataRequirings = 'Date must be below 01 January 2024',
  timeRequirings = 'Time must be from 10 till 18',
}

export const INITIAL_STATE: InitialState = {
  name: '',
  surname: '',
  zipcode: '',
  birthday: '',
  delivery: '',
  time: '',
  country: 'Russia',
  city: 'Monterey',
  sexuality: 'hetero',
  gender: 'male',
  subscribeEmail: 'on',
  subscribeSms: '',
  img: '',
};

export const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bangladesh',
  'Barbados',
  'Bahamas',
  'Bahrain',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo-Brazzaville',
  'Congo-Kinshasa',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cura?ao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'El Salvador',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Federated States of Micronesia',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Lands',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard and McDonald Islands',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'R?union',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Barth?lemy',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'S?o Tom? and Pr?ncipe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Swaziland',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Vietnam',
  'Venezuela',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

export const CITIES = [
  'Aberdeen',
  'Abilene',
  'Akron',
  'Albany',
  'Albuquerque',
  'Alexandria',
  'Allentown',
  'Amarillo',
  'Anaheim',
  'Anchorage',
  'Ann Arbor',
  'Antioch',
  'Apple Valley',
  'Appleton',
  'Arlington',
  'Arvada',
  'Asheville',
  'Athens',
  'Atlanta',
  'Atlantic City',
  'Augusta',
  'Aurora',
  'Austin',
  'Bakersfield',
  'Baltimore',
  'Barnstable',
  'Baton Rouge',
  'Beaumont',
  'Bel Air',
  'Bellevue',
  'Berkeley',
  'Bethlehem',
  'Billings',
  'Birmingham',
  'Bloomington',
  'Boise',
  'Boise City',
  'Bonita Springs',
  'Boston',
  'Boulder',
  'Bradenton',
  'Bremerton',
  'Bridgeport',
  'Brighton',
  'Brownsville',
  'Bryan',
  'Buffalo',
  'Burbank',
  'Burlington',
  'Cambridge',
  'Canton',
  'Cape Coral',
  'Carrollton',
  'Cary',
  'Cathedral City',
  'Cedar Rapids',
  'Champaign',
  'Chandler',
  'Charleston',
  'Charlotte',
  'Chattanooga',
  'Chesapeake',
  'Chicago',
  'Chula Vista',
  'Cincinnati',
  'Clarke County',
  'Clarksville',
  'Clearwater',
  'Cleveland',
  'College Station',
  'Colorado Springs',
  'Columbia',
  'Columbus',
  'Concord',
  'Coral Springs',
  'Corona',
  'Corpus Christi',
  'Costa Mesa',
  'Dallas',
  'Daly City',
  'Danbury',
  'Davenport',
  'Davidson County',
  'Dayton',
  'Daytona Beach',
  'Deltona',
  'Denton',
  'Denver',
  'Des Moines',
  'Detroit',
  'Downey',
  'Duluth',
  'Durham',
  'El Monte',
  'El Paso',
  'Elizabeth',
  'Elk Grove',
  'Elkhart',
  'Erie',
  'Escondido',
  'Eugene',
  'Evansville',
  'Fairfield',
  'Fargo',
  'Fayetteville',
  'Fitchburg',
  'Flint',
  'Fontana',
  'Fort Collins',
  'Fort Lauderdale',
  'Fort Smith',
  'Fort Walton Beach',
  'Fort Wayne',
  'Fort Worth',
  'Frederick',
  'Fremont',
  'Fresno',
  'Fullerton',
  'Gainesville',
  'Garden Grove',
  'Garland',
  'Gastonia',
  'Gilbert',
  'Glendale',
  'Grand Prairie',
  'Grand Rapids',
  'Grayslake',
  'Green Bay',
  'GreenBay',
  'Greensboro',
  'Greenville',
  'Gulfport-Biloxi',
  'Hagerstown',
  'Hampton',
  'Harlingen',
  'Harrisburg',
  'Hartford',
  'Havre de Grace',
  'Hayward',
  'Hemet',
  'Henderson',
  'Hesperia',
  'Hialeah',
  'Hickory',
  'High Point',
  'Hollywood',
  'Honolulu',
  'Houma',
  'Houston',
  'Howell',
  'Huntington',
  'Huntington Beach',
  'Huntsville',
  'Independence',
  'Indianapolis',
  'Inglewood',
  'Irvine',
  'Irving',
  'Jackson',
  'Jacksonville',
  'Jefferson',
  'Jersey City',
  'Johnson City',
  'Joliet',
  'Kailua',
  'Kalamazoo',
  'Kaneohe',
  'Kansas City',
  'Kennewick',
  'Kenosha',
  'Killeen',
  'Kissimmee',
  'Knoxville',
  'Lacey',
  'Lafayette',
  'Lake Charles',
  'Lakeland',
  'Lakewood',
  'Lancaster',
  'Lansing',
  'Laredo',
  'Las Cruces',
  'Las Vegas',
  'Layton',
  'Leominster',
  'Lewisville',
  'Lexington',
  'Lincoln',
  'Little Rock',
  'Long Beach',
  'Lorain',
  'Los Angeles',
  'Louisville',
  'Lowell',
  'Lubbock',
  'Macon',
  'Madison',
  'Manchester',
  'Marina',
  'Marysville',
  'McAllen',
  'McHenry',
  'Medford',
  'Melbourne',
  'Memphis',
  'Merced',
  'Mesa',
  'Mesquite',
  'Miami',
  'Milwaukee',
  'Minneapolis',
  'Miramar',
  'Mission Viejo',
  'Mobile',
  'Modesto',
  'Monroe',
  'Monterey',
  'Montgomery',
  'Moreno Valley',
  'Murfreesboro',
  'Murrieta',
  'Muskegon',
  'Myrtle Beach',
  'Naperville',
  'Naples',
  'Nashua',
  'Nashville',
  'New Bedford',
  'New Haven',
  'New London',
  'New Orleans',
  'New York',
  'New York City',
  'Newark',
  'Newburgh',
  'Newport News',
  'Norfolk',
  'Normal',
  'Norman',
  'North Charleston',
  'North Las Vegas',
  'North Port',
  'Norwalk',
  'Norwich',
  'Oakland',
  'Ocala',
  'Oceanside',
  'Odessa',
  'Ogden',
  'Oklahoma City',
  'Olathe',
  'Olympia',
  'Omaha',
  'Ontario',
  'Orange',
  'Orem',
  'Orlando',
  'Overland Park',
  'Oxnard',
  'Palm Bay',
  'Palm Springs',
  'Palmdale',
  'Panama City',
  'Pasadena',
  'Paterson',
  'Pembroke Pines',
  'Pensacola',
  'Peoria',
  'Philadelphia',
  'Phoenix',
  'Pittsburgh',
  'Plano',
  'Pomona',
  'Pompano Beach',
  'Port Arthur',
  'Port Orange',
  'Port Saint Lucie',
  'Port St. Lucie',
  'Portland',
  'Portsmouth',
  'Poughkeepsie',
  'Providence',
  'Provo',
  'Pueblo',
  'Punta Gorda',
  'Racine',
  'Raleigh',
  'Rancho Cucamonga',
  'Reading',
  'Redding',
  'Reno',
  'Richland',
  'Richmond',
  'Richmond County',
  'Riverside',
  'Roanoke',
  'Rochester',
  'Rockford',
  'Roseville',
  'Round Lake Beach',
  'Sacramento',
  'Saginaw',
  'Saint Louis',
  'Saint Paul',
  'Saint Petersburg',
  'Salem',
  'Salinas',
  'Salt Lake City',
  'San Antonio',
  'San Bernardino',
  'San Buenaventura',
  'San Diego',
  'San Francisco',
  'San Jose',
  'Santa Ana',
  'Santa Barbara',
  'Santa Clara',
  'Santa Clarita',
  'Santa Cruz',
  'Santa Maria',
  'Santa Rosa',
  'Sarasota',
  'Savannah',
  'Scottsdale',
  'Scranton',
  'Seaside',
  'Seattle',
  'Sebastian',
  'Shreveport',
  'Simi Valley',
  'Sioux City',
  'Sioux Falls',
  'South Bend',
  'South Lyon',
  'Spartanburg',
  'Spokane',
  'Springdale',
  'Springfield',
  'St. Louis',
  'St. Paul',
  'St. Petersburg',
  'Stamford',
  'Sterling Heights',
  'Stockton',
  'Sunnyvale',
  'Syracuse',
  'Tacoma',
  'Tallahassee',
  'Tampa',
  'Temecula',
  'Tempe',
  'Thornton',
  'Thousand Oaks',
  'Toledo',
  'Topeka',
  'Torrance',
  'Trenton',
  'Tucson',
  'Tulsa',
  'Tuscaloosa',
  'Tyler',
  'Utica',
  'Vallejo',
  'Vancouver',
  'Vero Beach',
  'Victorville',
  'Virginia Beach',
  'Visalia',
  'Waco',
  'Warren',
  'Washington',
  'Waterbury',
  'Waterloo',
  'West Covina',
  'West Valley City',
  'Westminster',
  'Wichita',
  'Wilmington',
  'Winston',
  'Winter Haven',
  'Worcester',
  'Yakima',
  'Yonkers',
  'York',
  'Youngstown',
];

export const INPUTS_TEXT_MOCKS = [
  { name: 'name', placeholder: 'Enter your name' },
  {
    name: 'surname',
    placeholder: 'Enter your surname',
  },
  {
    name: 'zipcode',
    placeholder: 'Where are you from',
  },
];

export const CHECKBOXES_MOCKS = [
  {
    name: 'Email',
    text: 'Send me emails',
    defaultChecked: true,
  },
  {
    name: 'Sms',
    text: 'Send me sms',
    defaultChecked: false,
  },
];

export const DATE_MOCKS = [
  {
    type: 'date',
    name: 'birthday',
    min: '1930-01-01',
    max: '2018-01-01',
    defaultValue: '2018-01-01',
    title: 'Birthday',
  },
  {
    type: 'date',
    name: 'delivery',
    min: getFormattedDate(),
    max: '2024-01-01',
    defaultValue: getFormattedDate(),
    title: 'Choose your delivery date:',
  },
  {
    type: 'time',
    name: 'time',
    min: '09:00',
    max: '18:00',
    defaultlValue: '10:01',
    title: 'Choose your delivery time:',
  },
];

export const RADIO_MOCKS = [
  {
    type: 'radio',
    name: 'sexuality',
    value: 'homosexual',
    defaultChecked: false,
  },
  {
    type: 'radio',
    name: 'sexuality',
    value: 'hetero',
    defaultChecked: true,
  },
  {
    type: 'radio',
    name: 'sexuality',
    value: 'lesbian',
    defaultChecked: false,
  },
  {
    type: 'radio',
    name: 'gender',
    value: 'male',
    defaultChecked: true,
  },
  {
    type: 'radio',
    name: 'gender',
    value: 'female',
    defaultChecked: false,
  },
];

export const SELECTS_MOCKS = [
  { name: 'country', defaultValue: 'Russia', options: COUNTRIES },
  {
    name: 'city',
    defaultValue: 'Monterey',
    options: CITIES,
  },
];
