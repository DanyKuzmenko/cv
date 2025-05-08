import { AppBar, Container, Toolbar } from '@mui/material'
import DesktopView from '@/widgets/header/ui/DesktopView'
import MobileView from '@/widgets/header/ui/MobileView'


export function Header() {
  return (
    <AppBar
      position={'fixed'}
      enableColorOnDark
      sx={{
        boxShadow: 0,
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        mt: 3,
      }}
    >
      <Container maxWidth={'lg'}>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            backdropFilter: 'blur(24px)',
            border: '1px solid hsla(220, 20%, 25%, 0.6)',
            borderRadius: '8px',
            boxShadow:
              'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px;',
          }}
        >
          <DesktopView />

          <MobileView />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
