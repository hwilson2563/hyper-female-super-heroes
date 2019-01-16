import { characters } from '../src/characters'
import { getCharacter } from '../src/utils'

describe('getCharacter', () => {
  test('should return user selected character if only one is input into the array', () => {
    let userSelectedCharacters = ['invisible-woman']
    let invisibleWoman = characters[0]
    expect(getCharacter(userSelectedCharacters)).toEqual(invisibleWoman)
  })
  test('should return user selected character if only one is input as a string', () => {
    let userSelectedCharacters = 'invisible-woman'
    let invisibleWoman = characters[0]
    expect(getCharacter(userSelectedCharacters)).toEqual(invisibleWoman)
  })
  test("should return randomly selected character from user's list if more than one is entered into the array", () => {
    let userSelectedCharacters = ['invisible-woman', 'x-23', 'wasp']
    let chosenName = getCharacter(userSelectedCharacters).name
    expect(userSelectedCharacters).toEqual(expect.arrayContaining([chosenName]))
  })
  test("should return default character when an empty array is given", () => {
    let userSelectedCharacters = []
    let defaultCharacter = characters[2]
    expect(getCharacter(userSelectedCharacters)).toEqual(defaultCharacter)
  })
})
