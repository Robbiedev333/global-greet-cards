export interface CountryData {
  country: string;
  question: string;
  answer: string;
  fun_fact: string;
  continent: string;
}

export const countriesData: CountryData[] = [
  {
    country: "Japan",
    question: "What is Japan famous for in technology?",
    answer: "Japan is renowned for its advanced robotics, electronics, and automotive industry, being home to companies like Sony, Toyota, and Honda.",
    fun_fact: "Japan has more than 6,800 islands, but only about 430 are inhabited!",
    continent: "Asia"
  },
  {
    country: "Brazil",
    question: "What makes Brazil's culture unique?",
    answer: "Brazil is famous for its vibrant carnival celebrations, diverse music styles like samba and bossa nova, and being the birthplace of football legends.",
    fun_fact: "Brazil is the only Portuguese-speaking country in South America and covers about half of the continent's land area.",
    continent: "South America"
  },
  {
    country: "Norway",
    question: "What natural phenomenon is Norway famous for?",
    answer: "Norway is world-famous for the Northern Lights (Aurora Borealis) and its stunning fjords carved by ancient glaciers.",
    fun_fact: "Norway has the world's longest road tunnel, the Lærdal Tunnel, stretching 24.5 kilometers through mountains!",
    continent: "Europe"
  },
  {
    country: "Kenya",
    question: "What is Kenya known for in wildlife?",
    answer: "Kenya is famous for the Great Migration, where millions of wildebeest and zebras cross the Masai Mara, and for being home to the 'Big Five' safari animals.",
    fun_fact: "Kenya is the birthplace of humanity - some of the oldest human fossils were discovered in the Rift Valley!",
    continent: "Africa"
  },
  {
    country: "Australia",
    question: "What unique animals live in Australia?",
    answer: "Australia is home to unique marsupials like kangaroos, koalas, and wombats, as well as the egg-laying platypus and echidna.",
    fun_fact: "Australia is the only country that is also a continent, and it's home to 21 of the world's 25 most venomous snakes!",
    continent: "Oceania"
  },
  {
    country: "Canada",
    question: "What is Canada known for culturally?",
    answer: "Canada is known for its multiculturalism, politeness, maple syrup, ice hockey, and beautiful natural landscapes including Niagara Falls.",
    fun_fact: "Canada has two official languages (English and French) and contains 20% of the world's fresh water!",
    continent: "North America"
  },
  {
    country: "India",
    question: "What makes India's cuisine special?",
    answer: "Indian cuisine is famous for its rich use of spices, diverse regional dishes, and cooking techniques that vary dramatically across different states.",
    fun_fact: "India is home to the wettest place on Earth (Mawsynram) and has more than 1,600 spoken languages!",
    continent: "Asia"
  },
  {
    country: "France",
    question: "What is France's contribution to art and culture?",
    answer: "France is renowned for its contributions to art, literature, cinema, fashion, and cuisine, being home to the Louvre and originating many art movements.",
    fun_fact: "France is the most visited country in the world and invented the concept of fine dining with its Michelin star system!",
    continent: "Europe"
  }
];