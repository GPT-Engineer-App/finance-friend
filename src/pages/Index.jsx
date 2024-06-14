import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl" textAlign="center">
            Financial News Today
          </Heading>
        </Box>

        {/* Headlines Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Headlines
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Market Hits Record Highs
                </Heading>
                <Text mt={2}>
                  The stock market reached new heights today as investors reacted positively to the latest economic data.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Tech Stocks Surge
                </Heading>
                <Text mt={2}>
                  Technology stocks led the way with significant gains, driven by strong earnings reports from major companies.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        {/* Market Data Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Dow Jones
                </Heading>
                <Text mt={2}>34,000.00</Text>
                <Text color="green.500">+200.00 (+0.59%)</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  NASDAQ
                </Heading>
                <Text mt={2}>14,000.00</Text>
                <Text color="green.500">+150.00 (+1.08%)</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  S&P 500
                </Heading>
                <Text mt={2}>4,200.00</Text>
                <Text color="green.500">+50.00 (+1.20%)</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        {/* Featured Articles Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Image src="https://via.placeholder.com/150" alt="Article Image" mb={4} />
                <Heading as="h3" size="md">
                  The Future of Cryptocurrency
                </Heading>
                <Text mt={2}>
                  An in-depth look at the rise of cryptocurrencies and what the future holds for digital currencies.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Image src="https://via.placeholder.com/150" alt="Article Image" mb={4} />
                <Heading as="h3" size="md">
                  Investing in Renewable Energy
                </Heading>
                <Text mt={2}>
                  Exploring the opportunities and challenges of investing in renewable energy sources.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;