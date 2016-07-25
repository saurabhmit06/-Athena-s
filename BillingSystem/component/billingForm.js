import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import ItemControl from './itemControl'
import { getUserDiscount} from '../reducers/item'
import Footer from './footer'

export const fields = [ 'username', 'email', 'usertype' ,'item[]' ]

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  return errors
}

class BillingForm extends Component {
   constructor(props) {
    super(props);
    // Manually bind this method to the component instance...
    this.state = {discount:0,usertype:'new'}
  }
  handleSubmitform(){

    alert();
  }
  HandelChange(e)
  {
     this.setState({discount:getUserDiscount(e.target.value),usertype:e.target.value})
  }
  render() {

    const { fields: { username, email, item }, resetForm, handleSubmit, submitting } = this.props


    return (<form onSubmit={this.props.handleSubmit(this.handleSubmitform)}>

        <h2>Billing System</h2>
        <hr/>
        <div>
          <label>Username</label>
          <div>
            <input type="text" placeholder="Username" {...username}/>
          </div>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>
        <div>
          <label>Email</label>
          <div>
            <input type="text" placeholder="Email" {...email}/>
          </div>
          {email.touched && email.error && <div>{email.error}</div>}
        </div>
        <div>
            <input type="radio" name="usertype" value="employee" onClick={this.HandelChange.bind(this)} /> Employee<br/>
            <input type="radio" name="usertype" value="affiliate" onClick={this.HandelChange.bind(this)} /> Affiliate<br/>
            <input type="radio" name="usertype" value="new" onClick={this.HandelChange.bind(this)}   /> New
        </div>
       <div>
        <ItemControl />
        <hr/>
        <Footer discount={this.state.discount} />
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting} Submit
          </button>
        </div>
      </form>
    )
  }
}

BillingForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'synchronousValidation',
  fields,
  validate
})(BillingForm)