export default function About({ title = 'About' }) {
  return (
    <div className="page about-page">
      <div className="container">
        <h1>{title}</h1>
        <p>
          This is a small student demo. It shows how components, props and routing work.
          I tried to keep it simple and readable.
        </p>
        <h3>Why this pattern?</h3>
        <ul>
          <li>Components are reusable and easy to test.</li>
          <li>Props keep pages configurable.</li>
          <li>Router enables single-page-app navigation.</li>
        </ul>
      </div>
    </div>
  )
}
