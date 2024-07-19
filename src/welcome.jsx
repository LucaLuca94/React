export function Welcome({ name}) {
  return (
    <div>
      <p>
        Welcome, <b>{name}</b>
      </p>
      
    </div>
  );
}
export function Age ({age}) {
  return <p>You are {age} years old</p>;
}