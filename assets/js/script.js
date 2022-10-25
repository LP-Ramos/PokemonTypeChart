const typeBtn = document.querySelectorAll('[typeBtn]');
let pkmnTypes = [];

const effectArea = document.querySelector('#result');

typeBtn.forEach(type => {
    type.addEventListener('click', getType);
}); 

function getType(event) {
    const type = event.target;

    if(pkmnTypes.length <= 1) {
        pkmnTypes.push(type);
        event.target.classList.toggle('type-selected');
    } else {
        pkmnTypes.forEach(type => {
            type.classList.toggle('type-selected');
        });

        pkmnTypes = [];
        pkmnTypes.push(type);
        event.target.classList.toggle('type-selected');
    }

    calcEffects(setEffect(pkmnTypes));
}

function setEffect(types) {
    const effectTitle = effectArea.children[0];
    const type1 = types[0];
    const type2 = types[1];

    const calcTypes = [];

    if(types.length == 1) {
        effectTitle.innerHTML = `<p>Effectiveness against:</p>
                                <div>
                                    <button class="type2 ${type1.value}">${type1.innerText}</button>
                                </div>`;
        calcTypes.push(type1.value);
    } else if(types.length == 2) {
        effectTitle.innerHTML = `<p>Effectiveness against:</p>
                                <div>
                                    <button class="type2 ${type1.value}">${type1.innerText}</button>
                                    <button class="type2 ${type2.value}">${type2.innerText}</button>
                                </div>`;
        calcTypes.push(type1.value);
        calcTypes.push(type2.value);
    }

    return calcTypes;
}

function calcEffects(types) {
    const allPkmnTypes = {'nor': 0, 'fir': 0, 'wat': 0, 'ele': 0, 'gra': 0, 'ice': 0, 'fig': 0, 'poi': 0, 'gro': 0, 'fly': 0, 'psy': 0, 'bug': 0, 'roc': 0, 'gho': 0, 'dra': 0, 'dar': 0, 'ste': 0, 'fai': 0};
    const type1 = types[0];
    const type2 = types[1];

    const noEffectDiv = document.querySelector('#noEffect');
    const notVeryEffectDiv = document.querySelector('#notVeryEffect');
    const normalEffectDiv = document.querySelector('#normalEffect');
    const superEffectDiv = document.querySelector('#superEffect');

    noEffectDiv.innerHTML = '';
    notVeryEffectDiv.innerHTML = '';
    normalEffectDiv.innerHTML = '';
    superEffectDiv.innerHTML = '';

    let noEffect = [];
    let notVeryEffect = [];
    let normalEffect = [];
    let superEffect = [];

    for (var i in allPkmnTypes) {
        allPkmnTypes[i] += 1;
    }

    if (type1 == 'nor' || type2 == 'nor') {
        for (var i in allPkmnTypes) {
            if (i == ['fig']) {
                allPkmnTypes[i] *= 2;
            } else if (i == ['gho']) {
                allPkmnTypes[i] *= 0;
            }
        }
    }

    if (type1 == 'fir' || type2 == 'fir') {
        for (var i in allPkmnTypes) {
            if (i == ['fir'] || i == ['gra'] || i == ['ice'] || i == ['bug'] || i == ['ste'] || i == ['fai']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['wat'] || i == ['gro'] || i == ['roc']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'wat' || type2 == 'wat') {
        for (var i in allPkmnTypes) {
            if (i == ['fir'] || i == ['wat'] || i == ['ice'] || i == ['ste']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['ele'] || i == ['gra']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'ele' || type2 == 'ele') {
        for (var i in allPkmnTypes) {
            if (i == ['ele'] || i == ['fly'] || i == ['ste']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['gro']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'gra' || type2 == 'gra') {
        for (var i in allPkmnTypes) {
            if (i == ['wat'] || i == ['ele'] || i == ['gra'] || i == ['gro']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['fir'] || i == ['ice'] || i == ['poi'] || i == ['fly'] || i == ['bug']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'ice' || type2 == 'ice') {
        for (var i in allPkmnTypes) {
            if (i == ['ice']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['fir'] || i == ['fig'] || i == ['roc'] || i == ['ste']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'fig' || type2 == 'fig') {
        for (var i in allPkmnTypes) {
            if (i == ['bug'] || i == ['roc'] || i == ['dar']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['fly'] || i == ['psy'] || i == ['fai']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'poi' || type2 == 'poi') {
        for (var i in allPkmnTypes) {
            if (i == ['gra'] || i == ['fig'] || i == ['poi'] || i == ['bug'] || i == ['fai']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['gro'] || i == ['psy']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'gro' || type2 == 'gro') {
        for (var i in allPkmnTypes) {
            if (i == ['poi'] || i == ['roc']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['wat'] || i == ['gra'] || i == ['ice']) {
                allPkmnTypes[i] *= 2;
            } else if (i == ['ele']) {
                allPkmnTypes[i] *= 0;
            }
        }
    }

    if (type1 == 'fly' || type2 == 'fly') {
        for (var i in allPkmnTypes) {
            if (i == ['gra'] || i == ['fig'] || i == ['bug']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['ele'] || i == ['ice'] || i == ['roc']) {
                allPkmnTypes[i] *= 2;
            } else if (i == ['gro']) {
                allPkmnTypes[i] *= 0;
            }
        }
    }

    if (type1 == 'psy' || type2 == 'psy') {
        for (var i in allPkmnTypes) {
            if (i == ['fig'] || i == ['psy']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['bug'] || i == ['gho'] || i == ['dar']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'bug' || type2 == 'bug') {
        for (var i in allPkmnTypes) {
            if (i == ['gra'] || i == ['fig'] || i == ['gro']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['fir'] || i == ['fly'] || i == ['roc']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'roc' || type2 == 'roc') {
        for (var i in allPkmnTypes) {
            if (i == ['nor'] || i == ['fir'] || i == ['poi'] || i == ['fly']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['wat'] || i == ['gra'] || i == ['fig'] || i == ['gro'] || i == ['ste']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'gho' || type2 == 'gho') {
        for (var i in allPkmnTypes) {
            if (i == ['poi'] || i == ['bug']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['gho'] || i == ['dar']) {
                allPkmnTypes[i] *= 2;
            } else if (i == ['nor'] || i == ['fig']) {
                allPkmnTypes[i] *= 0;
            }
        }
    }

    if (type1 == 'dra' || type2 == 'dra') {
        for (var i in allPkmnTypes) {
            if (i == ['fir'] || i == ['wat'] || i == ['ele'] || i == ['gra']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['ice'] || i == ['dra'] || i == ['fai']) {
                allPkmnTypes[i] *= 2;
            }
        }
    }

    if (type1 == 'dar' || type2 == 'dar') {
        for (var i in allPkmnTypes) {
            if (i == ['gho'] || i == ['dar']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['fig'] || i == ['bug'] || i == ['fai']) {
                allPkmnTypes[i] *= 2;
            } else if (i == ['psy']) {
                allPkmnTypes[i] *= 0;
            }
        }
    }

    if (type1 == 'ste' || type2 == 'ste') {
        for (var i in allPkmnTypes) {
            if (i == ['nor'] || i == ['gra'] || i == ['ice'] || i == ['fly'] || i == ['psy'] || i == ['bug'] || i == ['roc'] || i == ['dra'] || i == ['ste'] || i == ['fai']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['fir'] || i == ['fig'] || i == ['gro']) {
                allPkmnTypes[i] *= 2;
            } else if (i == ['poi']) {
                allPkmnTypes[i] *= 0;
            }
        }
    }

    if (type1 == 'fai' || type2 == 'fai') {
        for (var i in allPkmnTypes) {
            if (i == ['fig'] || i == ['bug'] || i == ['dar']) {
                allPkmnTypes[i] *= 0.5;
            } else if (i == ['poi'] || i == ['ste']) {
                allPkmnTypes[i] *= 2;
            } else if (i == ['dra']) {
                allPkmnTypes[i] *= 0;
            }
        }
    }

    let k = 0;
    let keys = Object.keys(allPkmnTypes);
    let key = keys[k];

    for (var i in allPkmnTypes) {
        if (allPkmnTypes[i] == 0) {
            noEffect.push(allPkmnTypes[i]);
            noEffectDiv.innerHTML += `<button class="type ${key} type-result">${setTypeName(key)} <br> x${allPkmnTypes[i]}</button>`;
        } else if (allPkmnTypes[i] > 1) {
            superEffect.push(allPkmnTypes[i]);
            superEffectDiv.innerHTML += `<button class="type ${key} type-result">${setTypeName(key)} <br> x${allPkmnTypes[i]}</button>`;
        } else if (allPkmnTypes[i] < 1) {
            notVeryEffect.push(allPkmnTypes[i]);
            notVeryEffectDiv.innerHTML += `<button class="type ${key} type-result">${setTypeName(key)} <br> x${allPkmnTypes[i]}</button>`;
        } else {
            normalEffect.push(allPkmnTypes[i]);
            normalEffectDiv.innerHTML += `<button class="type ${key} type-result">${setTypeName(key)} <br> x${allPkmnTypes[i]}</button>`;
        }

        k++;
        key = keys[k];
    }
}

function setTypeName(key) {
    if (key == 'nor') {
        return 'Normal';
    } else if (key == 'fir') {
        return 'Fire';
    } else if (key == 'wat') {
        return 'Water';
    } else if (key == 'ele') {
        return 'Electric';
    } else if (key == 'gra') {
        return 'Grass';
    } else if (key == 'ice') {
        return 'Ice';
    } else if (key == 'fig') {
        return 'Fighting';
    } else if (key == 'poi') {
        return 'Poison';
    } else if (key == 'gro') {
        return 'Ground';
    } else if (key == 'fly') {
        return 'Flying';
    } else if (key == 'psy') {
        return 'Psychic';
    } else if (key == 'bug') {
        return 'Bug';
    } else if (key == 'roc') {
        return 'Rock';
    } else if (key == 'gho') {
        return 'Ghost';
    } else if (key == 'dra') {
        return 'Dragon';
    } else if (key == 'dar') {
        return 'Dark';
    } else if (key == 'ste') {
        return 'Steel';
    } else if (key == 'fai') {
        return 'Fairy';
    } else {
        return key;
    }
}