import Card from "@/components/card"

const CATS = [
  {
    name: 'Puffins',
    breed: 'Bengal',
    url: 'https://placekitten.com/200/300',
    description: 'Lorem ipsum dolor sit amet, consetecur',
    age: 6,
  },
  {
    name: 'Sabbath',
    breed: 'Tabby',
    url: 'https://placekitten.com/200/300',
    description: 'Lorem ipsum dolor sit amet, black sabbath',
    age: 1,
  },
]

export default function Home() {
  const catCard = CATS.map((cat)=> <Card key={cat.name} name={cat.name} breed={cat.breed} url={cat.url} description={cat.description} age={cat.age} />)

  return <div className="flex flex-wrap justify-around items-center h-screen">{catCard}</div>

}
