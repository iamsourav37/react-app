import React from "react";
import Card from "./Card";

function MainContent() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div class="col-lg-4 col-md-6  mt-2">
          <Card
            title="React"
            desc="React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
          />
        </div>
        <div class="col-lg-4 col-md-6  mt-2">
          <Card
            title="Angular"
            desc="Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS."
          />
        </div>
        <div class="col-lg-4 col-md-6  mt-2">
          <Card
            title="Vue"
            desc="Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
          />
        </div>
        <div class="col-lg-4 col-md-6  mt-2">
          <Card
            title="Vue"
            desc="Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
          />
        </div>
        <div class="col-lg-4 col-md-6  mt-2">
          <Card
            title="Vue"
            desc="Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
          />
        </div>
        <div class="col-lg-4 col-md-6  mt-2">
          <Card
            title="Vue"
            desc="Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
          />
        </div>
        <div class="col-lg-4 col-md-6  mt-2">
          <Card
            title="Vue"
            desc="Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
