# Stage 1: build the jar using Maven
FROM maven:3-eclipse-temurin-21-alpine AS builder
WORKDIR /app

# Copy only the pom.xml first to leverage Docker caching
# If pom.xml doesn't change, this layer and the next (dependency download) will be cached.
COPY pom.xml .

RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY src ./src

# Package the application
RUN mvn clean package -DskipTests

# Stage 2: run the packaged jar
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy the packaged jar from the builder stage
COPY --from=builder "/app/target/museum-api-1.0-SNAPSHOT.jar" ./app.jar

# Expose the application port
EXPOSE 8080

# Define the entrypoint to run the jar
ENTRYPOINT ["java","-jar","/app/app.jar"]
