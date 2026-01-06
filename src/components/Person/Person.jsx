// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partner } = person;
  const partnersName = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age ? <p className="Person__age">{`I am ${age}`}</p> : ''}

      {isMarried ? (
        <p className="Person__partner">{`${partner} is my ${partnersName}`}</p>
      ) : (
        `I am not married`
      )}
    </section>
  );
};
