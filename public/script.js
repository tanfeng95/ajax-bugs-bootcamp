const firstDiv = document.getElementById('firstDiv');
const secondDiv = document.getElementById('secondDiv');

let Userid = null;

const signIn = (value1, value2) => {
  const data = {
    email: value1.value,
    password: value2.value,

  };
  console.log(data);
  axios
    .post('/user', data)
    .then((response) => {
      // console.log(response);
      // makeFirstDivDisappear();
      const { data } = response;
      const { getUser } = data;
      console.log(data);
      if (getUser[0].email === getUser[0].password) {
        firstDiv.style.display = 'none';
        const createLabel = document.createElement('p');
        createLabel.innerHTML = `welcome ${getUser[0].email}`;
        secondDiv.appendChild(createLabel);
        Userid = getUser[0].id;
        console.log(Userid);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const label1 = document.createElement('p');
label1.innerHTML = 'email';
const newInput1 = document.createElement('input');
newInput1.setAttribute('type', 'text');

const label2 = document.createElement('p');
label2.innerHTML = 'password';
const newInput2 = document.createElement('input');
newInput2.setAttribute('type', 'text');

const signInBtn = document.createElement('button');
signInBtn.innerHTML = 'sign in';
signInBtn.addEventListener('click', () => {
  signIn(newInput1, newInput2);
});

firstDiv.append(label1, newInput1, label2, newInput2, signInBtn);

const addBug = () => {
  const getProblem = document.getElementById('problem');
  const getError = document.getElementById('error');
  const getFeature = document.querySelector(
    'input[name="feature"]:checked',
  );
  // value is id
  console.log(getFeature.value);

  const data = {
    problem: getProblem.value,
    errorText: getError.value,
    feature_id: getFeature.value,
    user_id: Userid,
  };
  console.log(data);
  axios
    .post('/', data)
    .then((response) => {
      // console.log(response);
      // makeFirstDivDisappear();
      const { data } = response;
      console.log(data);
      // populateResult(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

axios
  .get('/features')
  .then((response) => {
    const radioDiv = document.getElementById('radioDiv');
    const { data } = response;
    const { getFeatures } = data;
    // console.log(getFeatures);
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
    createButton.addEventListener('click', () => { addBug(); });
    radioDiv.appendChild(createButton);
  });

axios
  .get('/allBugs')
  .then((response) => {
    // console.log(response);
    const getdiv = document.getElementById('bugListDiv');
    const { data } = response;
    const { allBugs } = data;

    for (let i = 0; i < allBugs.length; i++) {
      const pTag = document.createElement('p');
      pTag.innerHTML = `${allBugs[i].id}: problem => ${allBugs[i].problem} , error => ${allBugs[i].error_text}`;
      getdiv.appendChild(pTag);
      // console.log(allBugs[i].id);
      // console.log(allBugs[i].problem);
      // console.log(allBugs[i].error_text);
    }
  });

// const createinput = () => {
//   const formDiv = document.createElement('div');

//   const problemTag = document.createElement('p');
//   problemTag.innerHTML = 'problem';
//   const inputProblem = document.createElement('input');
//   inputProblem.setAttribute('type', 'text');

//   const errorTag = document.createElement('p');
//   errorTag.innerHTML = 'error';
//   const inputErrorText = document.createElement('input');
//   inputErrorText.setAttribute('type', 'text');

//   const commitTag = document.createElement('p');
//   commitTag.innerHTML = 'commit';
//   const inputCommit = document.createElement('input');
//   inputCommit.setAttribute('type', 'text');

//   const secondButton = document.createElement('button');
//   secondButton.innerText = 'Submit Your Bug';
//   secondButton.addEventListener('click', () => {
//     postBug(inputProblem, inputErrorText, inputCommit);
//   });

//   formDiv.append(problemTag, inputProblem, errorTag,
//     inputErrorText, commitTag, inputCommit, secondButton);

//   firstDiv.appendChild(formDiv);
// };
// const makeFirstDivDisappear = () => {
//   firstDiv.style.display = 'none';
// };

// const populateResult = (data) => {
//   const getSecondDiv = document.getElementById('secondDiv');
//   const createP = document.createElement('p');
//   createP.innerHTML = `problem = ${data[0].problem} , error text = ${data[0].error_text} , commit = ${data[0].commit}`;
//   getSecondDiv.appendChild(createP);
// };

// const postBug = (inputProblem, inputErrorText, inputCommit) => {
//   console.log(inputProblem.value);
//   const data = {
//     problem: inputProblem.value,
//     errorText: inputErrorText.value,
//     commit: inputCommit.value,
//   };
//   console.log(data);
//   axios
//     .post('/', data)
//     .then((response) => {
//       console.log(response);
//       makeFirstDivDisappear();
//       const { data } = response;
//       populateResult(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const buttonOne = document.createElement('button');
// buttonOne.innerText = 'Create a bug';
// buttonOne.addEventListener('click', () => { createinput(); });
// firstDiv.appendChild(buttonOne);
