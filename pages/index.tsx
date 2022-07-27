import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ApolloClient, InMemoryCache, DefaultOptions } from '@apollo/client';
import Image from 'next/image';
import HeaderImage from '../public/img/header-default-image.png';
import DOMPurify from 'isomorphic-dompurify';
import { GET_PAGE } from '../queries/get_page';
import { Box, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const defaultOptions: DefaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'ignore',
	},
	query: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'all',
	},
};

const client = new ApolloClient({
	uri: 'https://www.idinheiro.com.br/graphql',
	cache: new InMemoryCache(),
	connectToDevTools: true,
	defaultOptions,
});

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await client.query({
		query: GET_PAGE,
		variables: { uri: '/contato' },
	});

	return {
		props: {
			data: data.page,
		},
	};
};

interface IHomeProps {
	data: any;
}

const Home: NextPage<IHomeProps> = props => {
	const { data } = props;

	return (
		<div>
			<Head>
				<title>Chakra</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Box>
					{data.title && data.bannerPaginasInternas?.subtitulo && (
						<VStack
							spacing={8}
							bgGradient={'linear(to-b, black, blackAlpha.800)'}
							py={12}
							width='full'
						>
							<Image src={HeaderImage} alt='Header' />
							<Heading as='h1' color='white'>
								{data.title}
							</Heading>
							<Heading as='h2' fontSize={16} color='white'>
								{data.bannerPaginasInternas?.subtitulo}
							</Heading>
						</VStack>
					)}

					<Container>
						<Stack py={{ base: 8, md: 16 }} spacing={4}>
							<div
								className='wp-content'
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(data.content),
								}}
							/>
						</Stack>
					</Container>
				</Box>
			</main>
		</div>
	);
};

export default Home;
