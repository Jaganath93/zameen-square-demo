

export const Contact = ()=>{

    return(
        <form className="mt-5 bg-white p-3 rounded-4 shadow">
            <div>
                <h5 className="border-bottom border-opacity-25 pb-3">Contact Us</h5>
            </div>
            <div class="mb-3 mt-4">
    <label for="exampleInputPassword1" class="form-label border-opacity-25">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter your contact number"/>
  </div>
  <button type="submit" class="btn btn-primary profile-btn text-white w-100 my-2">SUBMIT</button>
</form>

    );
}