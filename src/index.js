/* eslint-disable no-undef */
import './styles/main.css'
import {
    MEMORIES,
    NUMBERS,
    ONE_VALUE_COMMANDS,
    PREV_VALUE_BTN,
    SCOREBOARD,
    SIGNS,
    TWO_VALUE_COMMANDS,
    ERROR,
    DELETEBUTTON,
} from './contains'
import {
    Validation,
    twoValueValidation,
    signValidation,
    lastValueValidation,
} from './errorHandler'


DELETEBUTTON.addEventListener('click', () => {
    SCOREBOARD.value = ''
})

NUMBERS.forEach((num) =>
    num.addEventListener('click', () => (SCOREBOARD.value += num.value))
)

SIGNS.forEach((sign) =>
    sign.addEventListener('click', () => signValidation(sign))
)

ONE_VALUE_COMMANDS.forEach((com) =>
    com.addEventListener('click', () => Validation(com))
)

TWO_VALUE_COMMANDS.forEach((com) =>
    com.addEventListener('click', () => twoValueValidation(com))
)

MEMORIES.forEach((mem) => mem.addEventListener('click', () => Validation(mem)))

PREV_VALUE_BTN.addEventListener('click', lastValueValidation)

SCOREBOARD.addEventListener('input', ERROR.value ? (ERROR.value = '') : '')
