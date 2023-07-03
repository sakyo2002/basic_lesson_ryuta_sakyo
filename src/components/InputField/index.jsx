import './index.css'

export const InputField = () => {
  let value = ''

  return (
    <>
      <input onChange={(e) => value = e.target.value} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
