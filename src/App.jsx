
import './App.css'
import Grandpa from './components/Granpa/Grandpa';
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/StatefulForm/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
   console.log('sign up data', data);
}

  const handleUpdateProfile =data =>{
   console.log('update profile', data);
  }


  return (
    <>
      
      <h1>From Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please SignUp Right Now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Allways keep your profile update</p>
        </div>
      </ReuseableForm>
      <Grandpa></Grandpa>
    </>
  )
}

export default App
