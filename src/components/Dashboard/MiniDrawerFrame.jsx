import { useContext, useState } from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreIcon from '@mui/icons-material/MoreVert'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useNavigate } from 'react-router-dom'
import ListItemFrame from './ListItemFrame'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../utils/environments'
import AddIcon from '@mui/icons-material/Add'
import PostAddIcon from '@mui/icons-material/PostAdd'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeIcon from '@mui/icons-material/Home'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined'
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined'
import SessionContext from '../../context/SessionContext'

const style_drawer = {
  backgroundColor: '#9d5ceb'
}
const itemsHeader = [
  { textItem: 'Inicio', path: '', iconItem: <HomeIcon /> }
]

const itemsFooter = [
  { textItem: 'Configuracion', path: 'config', iconItem: <SettingsIcon /> }
]

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
)

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

export default function MiniDrawerFrame ({ children }) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const itemsBody = []
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession, darkMode, toggleDarkMode } = useContext(SessionContext)

  switch (rol) {
    case ROL_ADMIN:
      itemsBody.push(
        { textItem: 'Usuarios', path: 'admin/users', iconItem: <PeopleOutlinedIcon /> },
        { textItem: 'Grupos', path: 'admin/groups', iconItem: <GroupsOutlinedIcon /> },
        { textItem: 'Practicas', path: 'admin/practices', iconItem: <CasesOutlinedIcon /> }
      )
      break
    case ROL_TEACHER:
      itemsBody.push(
        { textItem: 'Mis Grupos', path: 'teacher/groups', iconItem: <GroupsOutlinedIcon /> },
        { textItem: 'Practices', path: 'teacher/practices', iconItem: <PendingActionsOutlinedIcon /> }
      )
      break
    case ROL_STUDENT:
      itemsBody.push(
        { textItem: 'Inscripciones', path: 'student/inscriptions', iconItem: <GroupsOutlinedIcon /> },
        { textItem: 'Practicas en equipo', path: 'student/teams', iconItem: <Diversity3OutlinedIcon /> },
        { textItem: 'Practicas individuales', path: 'student/individuals', iconItem: <AssignmentLateOutlinedIcon /> }
      )
      break
    default:
      break
  }

  const navigate = useNavigate()
  const onClickItemMenu = (path) => {
    navigate(`/${path}`)
  }

  const handleProfile = () => {
    navigate('/profile', { state: { usernameView: usernameSession, rolView: rol } })
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleProfile}>Perfil</MenuItem>
      <MenuItem onClick={() => onClickItemMenu('account')}>Cuenta</MenuItem> */}
      <MenuItem onClick={() => deleteSession()} />
      <MenuItem onClick={() => deleteSession()}>Cerrar sesión</MenuItem>
      <MenuItem onClick={() => deleteSession()} />
    </Menu>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open} className='barra'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='go back'
            onClick={handleGoBack}
            edge='start'
            sx={{
              marginRight: 2
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
            {nombreSession}
          </Typography>
          <IconButton
            color='inherit'
            aria-label='toggle dark mode'
            onClick={() => toggleDarkMode()}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* {rol === ROL_TEACHER && <>
              <IconButton
                size='large'
                aria-label='Nuevo Caso'
                aria-haspopup='true'
                onClick={() => console.log('Nuevo Caso')}
                color='inherit'
              >
                <PostAddIcon />
              </IconButton>
              <IconButton
                size='large'
                aria-label='Agregar Grupo'
                aria-haspopup='true'
                onClick={() => console.log('Nuevo grupo')}
                color='inherit'
              >
                <AddIcon />
              </IconButton>
                                    </>} */}
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}

      <Drawer
        variant='permanent'
        open={open}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <DrawerHeader className='Drawer'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListItemFrame items={itemsHeader} onClickItemMenu={onClickItemMenu} />
        <Divider />
        <ListItemFrame items={itemsBody} onClickItemMenu={onClickItemMenu} />
        <Divider />
        <ListItemFrame items={itemsFooter} onClickItemMenu={onClickItemMenu} />
      </Drawer>

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}
