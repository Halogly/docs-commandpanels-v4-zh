# 快速上手

本指南将帮助你搭建开发环境，并使用Maven或Gradle开始接入CommandPanels。

---

## Maven

将JitPack仓库添加到`pom.xml`中的`<repositories>`内：

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

在`<dependencies>`内添加CommandPanels依赖：

```xml
<dependencies>
    <dependency>
        <groupId>com.github.rockyhawk64</groupId>
        <artifactId>CommandPanels</artifactId>
        <version>d9a3ae6981</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

## Gradle Kotlin DSL

将JitPack仓库添加到`settings.gradle.kts`文件：

```kotlin
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        mavenCentral()
        maven { url = uri("https://jitpack.io") }
    }
}
```

将依赖添加到你的`build.gradle.kts`文件：

```kotlin
dependencies {
    compileOnly("com.github.rockyhawk64:CommandPanels:d9a3ae6981")
}
```

## Gradle (Groovy)

将JitPack仓库添加到`build.gradle`中的`repositories`内，然后将依赖添加到`dependencies`：

```groovy
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}
```

将依赖添加到你的`build.gradle`文件：

```groovy
dependencies {
    compileOnly 'com.github.rockyhawk64:CommandPanels:d9a3ae6981'
}
```
