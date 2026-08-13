function UserCard({ user }) {

    return (
       <div className="container mt-5">

<div className="card profile-card shadow-lg">


<img
  src={user.avatar_url}
  className="card-img-top profile-image"
  alt={`${user.login}'s profile`}
  width="400"
  height="400"
  loading="lazy"
/>


<div className="card-body text-center">


<h2 className="fw-bold">
{user.name}
</h2>


<p className="text-muted">
@{user.login}
</p>


<p>
{user.bio || "No bio available"}
</p>


<div className="row mt-4">


<div className="col">

<h5>
{user.followers}
</h5>

<p>
Followers
</p>

</div>



<div className="col">

<h5>
{user.following}
</h5>

<p>
Following
</p>

</div>



<div className="col">

<h5>
{user.public_repos}
</h5>

<p>
Repos
</p>

</div>


</div>



<a

href={user.html_url}

target="_blank"
 rel="noopener noreferrer"

className="btn btn-dark mt-3">

Visit Github

</a>


</div>

</div>

</div>

)

}


export default UserCard; 