<template>
  <div>
    <b-jumbotron
      bg-variant="white"
      header="Welcome"
      lead="Some other info here"
    >
      <template #header>
        <font-awesome-icon icon="ribbon" class="mr-2" /> Welcome to Sugar Mill
      </template>

      <p>
        The intended purpose of this application is to give the growers, or users, the ability to change
        Tracts of lands for a sugar cane load.
      </p>
      <h4>
        General usage guide
      </h4>
      <p>
        This is the spash page if you would, in the upper right hand corner is the login screen.
        Once logged in, you will be taken to a page that will contain the following:
        <ul>
          <li>User name</li>
          <li>Company Name</li>
          <li>Table of current loads</li>
          <li>Process button (used to change land tracts)</li>
        </ul>
      </p>
      <p>
        To change the load that was labled incorrectly, select the <strong>Process</strong> button. 
        A new window will appear with Mill Name, current land tract name. To change the current tract, click the 
        drowdown arrow, and select the Land tract that is wished, save. The single load will not reflect a change
        until the page is reloaded. Afterwards, logout to prevent any secruity risks.
      </p>

      <h4>
        Point of contact
      </h4>
      <p>
        To request an account please contact <strong>XYZ@xyz.com</strong> please provide
        <ul>
          <li>Email Address</li>
          <li>Full Name</li>
          <li>Company Name</li>
        </ul>
      </p>
    </b-jumbotron>
  </div>
</template>
