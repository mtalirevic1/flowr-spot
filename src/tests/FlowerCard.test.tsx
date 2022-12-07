import {it, describe} from 'vitest'
import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer'

import FlowerCard from '../components/Home/FlowerCard'

const testFlower = {
    id: 1,
    name: 'Test',
    latin_name: 'Testus Testati',
    profile_picture: '',
    sightings: 4,
    favorite: false
}

describe('FlowerCard', () => {
    it("should show the favorite button while user is logged in", () => {
        render(<FlowerCard
            flower={testFlower}
            isLoggedIn={true}/>)

        const favButton = screen.getByTestId('favoriteButton')

        expect(favButton).toBeVisible()
    })
})

describe('FlowerCard Snapshot', ()=>{
    it('should match DOM Snapshot', () => {
        const tree = renderer.create(<FlowerCard flower={testFlower} isLoggedIn={true}/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})