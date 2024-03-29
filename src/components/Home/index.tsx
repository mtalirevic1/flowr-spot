import {ColumnBox, IconButtonNoBg} from '../../GlobalStyle'
import {NAVBAR_HEIGHT} from '../../constants/layout'
import HeroImage from '../../assets/heroImage.png'
import {InputBase, Typography, useMediaQuery, useTheme} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import FlowerCard from './FlowerCard'
import {useFlowers} from '../../hooks/useFlowers'
import Loader from './Loader'
import {ChangeEvent, useState, KeyboardEvent} from 'react'
import Grid from './Grid'


const Home = () => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'xl'))

    const {isLoggedIn} = useSelector((state: RootState) => state.auth)
    const {flowers, isLoadingFlowers, fetchFlowers} = useFlowers()

    const [search, setSearch] = useState('')

    const handleFetchFlowers = () =>{
        fetchFlowers(search)
    }

    const handleKeyPress = (keyboardEvent: KeyboardEvent<HTMLElement>) => {
        if (keyboardEvent.key !== 'Enter') return;
        handleFetchFlowers()
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value)
    }

    return (
        <ColumnBox
            mt={NAVBAR_HEIGHT}
            sx={{
                background: (theme) => theme.palette.secondary.background
            }}
        >
            <div
                style={{
                    height: '500px',
                    width: '100%',
                    background: `url(${HeroImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >
                <Typography variant="h1" color="white" sx={{mb: '15px'}}>
                    Discover flowers around you
                </Typography>
                <Typography
                    fontSize="17px"
                    fontWeight={300}
                    color="white"
                    sx={{opacity: 0.7, mb: '45px'}}
                >
                    Explore between more than 8.427 sightings
                </Typography>
                <InputBase
                    onKeyDown={handleKeyPress}
                    value={search}
                    onChange={handleSearchChange}
                    sx={{
                        background: (theme) => theme.palette.common.white,
                        borderRadius: '3px',
                        p: '0 20px 0 20px',
                        width: {
                            md: '600px',
                            sm: '450px',
                            xs: '300px'
                        },
                        height: '56px',
                        fontWeight: 300,
                        fontSize: '18px'
                    }}
                    placeholder="Looking for something specific?"
                    endAdornment={
                        <IconButtonNoBg onClick={handleFetchFlowers}>
                            <SearchIcon fontSize="large" color="primary"/>
                        </IconButtonNoBg>
                    }
                />
            </div>
            <Grid
                display='flex'
                justifyContent='center'
                mt={isDesktop ? '70px' : '40px'}
                mb={'100px'}
            >
                {!isLoadingFlowers &&
                    <>
                        {flowers.map(({
                                          id,
                                          profile_picture,
                                          name,
                                          latin_name,
                                          sightings,
                                          favorite
                                      }) => (
                                <FlowerCard
                                    key={id}
                                    flower={{
                                        id,
                                        profile_picture,
                                        name,
                                        latin_name,
                                        favorite,
                                        sightings
                                    }}
                                    isLoggedIn={isLoggedIn}
                                />
                        ))}
                    </>
                }
                {isLoadingFlowers &&
                        <Loader/>
                }
            </Grid>

        </ColumnBox>
    )
}

export default Home