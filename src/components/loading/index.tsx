import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress style={{ color: "#728A7C" }} />
    </Box>
  );
}

export { Loading };