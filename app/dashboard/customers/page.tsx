export default async function Page() {
    let myFunc = async() => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    await myFunc()
    return <p>Customers Page</p>;
  }