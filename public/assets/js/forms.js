const validateField = (field, message) => {
  if (!field.value && field.value.trim()) {
    alert(message)
    return false
  }
  return true
}
const validateNotice = (form) => {
  return validateField(form.email, 'O email deve ser informado') && validateField(form.descricao,'A descrição deve ser informado') && 
  validateField(form.titulo, 'O titulo deve ser informado') && 
  validateField(form.cidade, 'A cidade deve ser informada.') 
}

const validatesearch = (form) => {
  return validateField(form.key, 'informe o que deseja buscar!')
}