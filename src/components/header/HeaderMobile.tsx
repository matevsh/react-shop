import { Box, Button, Center, Collapse, Divider, Drawer, Group, ScrollArea, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import { useStyles } from './styles';
import { ReactNode } from 'react';

type Props = {
	drawerOpened: boolean;
	closeDrawer: () => void;
	toggleLinks: () => void;
	linksOpened: boolean;
	children: ReactNode;
};

const HeaderMobile = ({ drawerOpened, closeDrawer, toggleLinks, children, linksOpened }: Props) => {
	const { classes, theme } = useStyles();

	return (
		<Drawer
			opened={drawerOpened}
			onClose={closeDrawer}
			size="70%"
			padding="md"
			title="Navigation"
			className={classes.hiddenDesktop}
			zIndex={1000000}
		>
			<ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
				<Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

				<a href="#" className={classes.link}>
					Home
				</a>
				<UnstyledButton className={classes.link} onClick={toggleLinks}>
					<Center inline>
						<Box component="span" mr={5}>
							Features
						</Box>
						<IconChevronDown size={16} color={theme.fn.primaryColor()} />
					</Center>
				</UnstyledButton>
				<Collapse in={linksOpened}>{children}</Collapse>
				<a href="#" className={classes.link}>
					Learn
				</a>
				<a href="#" className={classes.link}>
					Academy
				</a>

				<Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

				<Group position="center" grow pb="xl" px="md">
					<Button variant="default">Log in</Button>
					<Button>Sign up</Button>
				</Group>
			</ScrollArea>
		</Drawer>
	);
};

export default HeaderMobile;
