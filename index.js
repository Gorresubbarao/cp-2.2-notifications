const Notification = props => {
  //  Write your code here.
  // imgUrl = 'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
  const {className, imgUrl, massege} = props

  return (
    <div className={className}>
      <img src={imgUrl} className='img' />
      <p className='description'>{massege}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='notification-container'>
    <h1 className='heading'>Notifications</h1>
    <Notification
      className='information-bg-color'
      imgUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      massege='Information Massege'
    />
    <Notification
      className='success-bg-color'
      imgUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      massege='Success Massege'
    />
    <Notification
      className='warning-bg-color'
      imgUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      massege='Warning Massege'
    />
    <Notification
      className='error-bg-color'
      imgUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      massege='Error Massege'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
