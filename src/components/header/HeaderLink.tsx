import { Flex, Text, UnstyledButton } from '@mantine/core';
import { IconPoint } from '@tabler/icons';
import { useStyles } from './styles';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

type Props = {
	category: string;
};

const HeaderLink = ({ category }: Props) => {
	const { classes } = useStyles();

	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const changeCategory = () => {
		navigate({
			pathname: '/',
			search: createSearchParams({ category, ...searchParams }).toString(),
		});
	};

	return (
		<UnstyledButton className={classes.subLink} key={category} onClick={changeCategory} pl={4} pr={16}>
			<Flex gap={4}>
				<IconPoint />
				<Text size="sm" weight={500} transform={'capitalize'}>
					{category}
				</Text>
			</Flex>
		</UnstyledButton>
	);
};

export default HeaderLink;
