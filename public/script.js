const firstDiv = document.getElementById('firstDiv');
firstDiv.style.display = 'none';

axios
  .get('/features')
  .then((response) => {
    const radioDiv = document.getElementById('radioDiv');
    const { data } = response;
    const { getFeatures } = data;
    console.log(getFeatures);
    for (let i = 0; i < getFeatures.length; i++) {
      const newDiv = document.createElement('div');
      const radiolabel = document.createElement('label');
      radiolabel.innerHTML = `${getFeatures[i].name}`;
      radiolabel.setAttribute('for', `${getFeatures[i].id}`);

      const radioInput = document.createElement('input');
      radioInput.setAttribute('type', 'radio');
      radioInput.setAttribute('id', `${getFeatures[i].id}`);
      radioInput.name = 'feature';
      radioInput.value = `${getFeatures[i].id}`;

      newDiv.appendChild(radioInput);
      newDiv.appendChild(radiolabel);

      radioDiv.appendChild(newDiv);
    }
    const createButton = document.createElement('button');
    createButton.textContent = 'create';
    createButton.addEventListener('click', () => { addbug(); });
    radioDiv.appendChild(createButton);
  });

const addBug = () => {

};

const createinput = () => {
  const formDiv = document.createElement('div');

  const problemTag = document.createElement('p');
  problemTag.innerHTML = 'problem';
  const inputProblem = document.createElement('input');
  inputProblem.setAttribute('type', 'text');

  const errorTag = document.createElement('p');
  errorTag.innerHTML = 'error';
  const inputErrorText = document.createElement('input');
  inputErrorText.setAttribute('type', 'text');

  const commitTag = document.createElement('p');
  commitTag.innerHTML = 'commit';
  const inputCommit = document.createElement('input');
  inputCommit.setAttribute('type', 'text');

  const secondButton = document.createElement('button');
  secondButton.innerText = 'Submit Your Bug';
  secondButton.addEventListener('click', () => {
    postBug(inputProblem, inputErrorText, inputCommit);
  });

  formDiv.append(problemTag, inputProblem, errorTag,
    inputErrorText, commitTag, inputCommit, secondButton);

  firstDiv.appendChild(formDiv);
};
const makeFirstDivDisappear = () => {
  firstDiv.style.display = 'none';
};

const populateResult = (data) => {
  const getSecondDiv = document.getElementById('secondDiv');
  const createP = document.createElement('p');
  createP.innerHTML = `problem = ${data[0].problem} , error text = ${data[0].error_text} , commit = ${data[0].commit}`;
  getSecondDiv.appendChild(createP);
};

const postBug = (inputProblem, inputErrorText, inputCommit) => {
  console.log(inputProblem.value);
  const data = {
    problem: inputProblem.value,
    errorText: inputErrorText.value,
    commit: inputCommit.value,
  };
  console.log(data);
  axios
    .post('/', data)
    .then((response) => {
      console.log(response);
      makeFirstDivDisappear();
      const { data } = response;
      populateResult(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const buttonOne = document.createElement('button');
buttonOne.innerText = 'Create a bug';
buttonOne.addEventListener('click', () => { createinput(); });
firstDiv.appendChild(buttonOne);
