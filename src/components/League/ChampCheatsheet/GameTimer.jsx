import { HStack, IconButton, Text } from '@chakra-ui/react';
import { useStopwatch } from 'react-timer-hook';
import { TimeIcon } from '@chakra-ui/icons';
import { FaPlay as PlayIcon, FaPause as PauseIcon } from 'react-icons/fa6';
import { VscDebugRestart as RestartIcon } from 'react-icons/vsc';

export default function GameTimer() {
  const { seconds, minutes, hours, days, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  return (
    <HStack sx={{ fontSize: '20px' }}>
      <TimeIcon />
      <Text sx={{ width: '200px' }}>
        {days}:{hours}:{minutes}:{seconds}
      </Text>
      <IconButton onClick={start}>
        <PlayIcon />
      </IconButton>
      <IconButton onClick={pause}>
        <PauseIcon />
      </IconButton>
      <IconButton onClick={reset}>
        <RestartIcon />
      </IconButton>
    </HStack>
  );
}
