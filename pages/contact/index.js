const Index = () => {
  return <p>contact page</p>
};

export async function getStaticProps() {
  
  const data = {
    name: 'Michael Henderson',
    occupation: 'Software Engineer',
    age: 'old'
  }

  return { props: data }
}

export default Index;



