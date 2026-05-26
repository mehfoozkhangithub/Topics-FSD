import { Form } from './Components/Form';

export const App = () => {
  const fruites = ['apple', 'mango', 'kiwi'];

  let list = [];

  fruites.forEach((el, i) => {
    list.push(<p key={i}>{el}</p>);
  });

  return (
    <>
      {/* <Form /> */}
      {list}
    </>
  );
};
