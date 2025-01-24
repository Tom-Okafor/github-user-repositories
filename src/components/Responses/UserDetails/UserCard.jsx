import RepositoryCard from "./RepositoryCard";

export default function UserCard() {
  return (
    <section className="py-8">
      <div>
        <img src="" alt="user profile" />
        <p>user name</p>
        <p>user bio</p>
        <p>
          <span>email</span> <span>location</span>
        </p>
        <a href="">Visit Github Page</a>
      </div>
      <ul>
        <li>
          <span>num</span> <span>followers</span>
        </li>
        <li>
          <span>num</span> <span>follwing</span>
        </li>
        <li>
          <span>num</span> <span>total repositories</span>
        </li>
      </ul>
      <div>
        <h3>top repositories</h3>
        <div className="usercard">
          <RepositoryCard />
        </div>
      </div>
    </section>
  );
}
