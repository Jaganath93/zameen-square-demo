

export const ProjectCards = ({apt})=>{

    return(
        <div class="col">
                    <div class="card border-0 ms-5 mt-3">
                      <img className="proj-card" src="https://s3-alpha-sig.figma.com/img/dc65/be1e/1125f6772ed4f467da95ee102e169fbe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtdeACLApMHED6RLNl96rNsGswSj4q5LgJCc74IdH11jprLb0G-YXwp-4pBJXODo~8y2KdKqKlMkBgPi416ZUa6ffX1xw6j-tAibOjE8r7d1m-yJwMrlVKTcIJAW3W1FL2D18oxIySdkiXr15kykADl-wedLuebprWirXLaCJkhsLcPtr4YI9OcJmReNVnEusFIA2Y1yR~CdJGfs2Q7~45yAaxY0Xn9JsWWkmYQGaJ12xcTL0muVWxqDSdd~cImkETnpVHBM8Dg472vn2iUrUD9~l172YCQzBmmOsDN2A-PPEPisB0EGrSe3nszf30CToJ-2RVm~ayV~nC8T8XxziA__" class="card-img-top" alt="banner"/>
                      <div className="d-flex flex-column flex-lg-row justify-content-between">
                      <div class="card-body">
                        <h5 class="card-title">{apt.bhk}</h5>
                        <p class="card-text text-muted">{apt.area}</p>
                      </div>
                      <div class="card-body d-flex flex-row justify-content-between flex-lg-column">
                      <p class="card-text bhk-col text-center">Starting From</p>
                      <h5 class="card-title mt-0 pt-0 fw-bolder text-primary">{apt.price}</h5>
                      </div>
                      </div>
                    </div>
                                 </div>
    );
};