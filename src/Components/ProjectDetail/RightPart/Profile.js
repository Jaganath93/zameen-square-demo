

export const Profile = ()=>{

    return(
        <div class="card border-0 rounded-4 shadow" style={{minWidth:'20rem', maxWidth:'25rem', height:'200px'}}>
  <div class="row g-0">
    <div class="col-4">
      <img style={{objectFit:'cover'}} src="https://s3-alpha-sig.figma.com/img/a223/540d/2e10a474358a5f36b3329ce46d53be1a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GoPu32nglfZbVSm-ZdaSPY5LXRy1Sh6AvZR-EfmgfS3CHrL9vDxSbEtoJCoQKUYpWeTJIslmNHqQQr2NEY1sf73QWq2c0l9-vUFV6kwRT5VTR0GgPGZtTFZMT27GHoAMveeTq5t06Bv9cp7OSCCVzS7TQ2sAqG2Tl1JDEWa0DuawYf~SJvm1cKex~ri5pimKBN3yaTw6b4vBEaI5PP3rifeNuCz27AA~DhBVuWq6c7bxiLdtADejxx-l74V1tE3gIPcFh5R6tpT4RlwrMIgwL~WCKBKNh6VSJNaPhjdFqd1fCSQc9BMMGy6Ltno-RDDMmjaOnvbbmniRs~UTzb4URg__" class="img-fluid rounded-4 h-75 w-100 p-2" alt="..."/>
    </div>
    <div class="col-8">
      <div class="card-body mb-5">
      <p class="card-text text-muted"><small class="text-body-secondary">Posted by</small></p>
        <h6 class="card-title fw-bold">Bhasker G</h6>
        <p class="card-text profile-num">Call : 98765XXXXX</p>
        <button type="button" class="btn btn-primary profile-btn text-white">Request Callback</button>
      </div>
    </div>
  </div>
</div>
    );
};