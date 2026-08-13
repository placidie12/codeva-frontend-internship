function SearchBox({
    username,
    setUsername,
    searchUser,
}){

    return (
    <div id="home" className="container text-center hero">

        <h1 className="display-5 fw-bold text-white">
            Find GitHub Users
        </h1>


        <p className="lead text-white">
            Search any GitHub profile instantly
        </p>


        <div className="row justify-content-center">

            <div className="col-md-6">


                <input

                type="text"

                className="form-control form-control-lg"

                placeholder="Enter username"

                value={username}

                onChange={(e)=>setUsername(e.target.value)}

                />


                <button

                onClick={searchUser}

                className="btn btn-success btn-lg mt-3 w-100">

                Search User

                </button>


            </div>

        </div>

    </div>
    )

}

export default SearchBox;