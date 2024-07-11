

export const AgentCard = ({data,location})=>{

    return(
        <div className="col col-md-6 col-lg-4">
                <div class="card border-0 mt-5 agent-card" style={{width:'18rem'}}>
                 <img src="https://s3-alpha-sig.figma.com/img/3e23/7d30/065a7089938b45eecb5d4d9ab46f3daf?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOaKszHib6CqtIBM-oblwK3zDqKrznRsqWU3n3NzUwkQmOgOMmtEOhVYVoB60vMcJ~Ho~LiFkLGCJm2BdV3OP8MMZpOsl3f93FZdIrItq86h3CrQW4w5JwAdEkER9FnMyz3W6lKiIc4ZPHlqer2IanBu336miCLl~vlSwrxhsGpsq3iNcIi4jI1zCJwlYFLi-j~LieWekUh3n5kuxfM-eAvSIOiJqHZ~ldrJWsC2BLPxz7rN4KuwKKJkrze7z9jkLWv5Av8MYdpF0pvsjXnRKClybevU1iZ2hI8Ak4fbtwbv-xgp5RJhLzG8h6dkMHiMRt9Q5vQRaHbxCze0YXvB7A__" class="card-img-top mx-5 my-5 agent-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">{data.name}</h5>
    <p class="card-text text-center text-muted">{data.properties}| {location}</p>
    <div className="text-center mb-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<span>{data.rating} Ratings {(data.peopleRated)}</span>
    </div>

    <div className="d-flex justify-content-between">
    <a href="#" class="btn btn-primary w-100 me-3">Contact</a>
    <button className="share-btn rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
</svg></button>
    </div>
  </div>
</div>
                </div>
    );
}