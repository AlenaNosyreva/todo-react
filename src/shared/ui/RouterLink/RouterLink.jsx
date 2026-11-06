import {BASE_URL} from "@/shared/constants"

const RouterLink = (props) => {
  const {
    to,
    children,
    ...rest
  } = props

  const handleClick = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', to) // добавить новую запись в историю браузера и изменить URL без перезагрузки страницы.
    window.dispatchEvent(new PopStateEvent('popstate')) // создать и отправить объект события слушателю
  }

  return (
    <a href={`${BASE_URL} ${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default RouterLink