// Fetch json data
const fetchQuestions = async () => {
  return await fetch('./questions/questions.json')
    .then(response => response.json())
    .then(data => data);
}







