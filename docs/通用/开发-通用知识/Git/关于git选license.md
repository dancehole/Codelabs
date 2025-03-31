# 如何快速选择开源许可证License，看这三个就够了_copyright-CSDN博客

开源License很多，如果你不想在License耗费太多精力，那么推荐你重点了解这三种：GPL、Apache License及MIT。这三种在开源License中很具代表性，使用广泛，且简洁易理解。同时，这三种license是经过OSI（Open Source Initiative）、FSF（Free Software Fundation)核准验证可用于提供给开源者颁发授权的许可证。

- Licenses: GNU General Public License(GPL)
    
    - 使用软件: Linux、MySQL、Oracle OpenJDK、Ansible、Bash、GIMP
        
    - 最新版本: GPLv3.0
        
    - 特点: 公有软件最强大的护盾，基于原作品的再发布版本必须是原GPL授权，不能商业私有化。
        
    - 主要授权: 有源码 可使用 可拷贝 可修改 可再发版 专利可用(MIT License没有明确的专利授权条款）
        
- Licenses: Apache License
    
    - 使用软件: Apache\Spring\GoogleAndroid
        
    - 最新版本: Apache License 2.0
        
    - 特点: 比GPL更宽松，基于原作品的再发布可另授权，可商业私有化。
        
    - 主要授权:
        
- Licenses: MIT License
    
    - 使用软件: Babel、.Net Core、Rails
        
    - 最新版本: MIT License
        
    - 特点: 条款简洁，基于原作品的再发布可另授权，可商业私有化
        
    - 主要授权: 有源码、可使用、可拷贝、可修改、可再发版、专利可用(MIT License没有明确的专利授权条款
        

具体选择根据开源目的，一般开源程序推荐使用Apache License 2.0，可以让更多人使用利于推广，如果是大型的开源软件且希望基于开源作品的任何版本不能商业私有化则推荐GPL（比如Linux)，而如果简单开源省事可以用MIT License，它最大限度地授权用户使用，没有什么限制条款。

## 扩展：

BSD也有较大知名度，但是版本太多，条款不够清晰简洁，Facebook曾用“BSD+专利附件条款”开源React引起公愤，想省事的略过。

The Unlicense（注意不是No License），它是一种极简的授权，主要内容就是开源授权，没有限制条款，该License目前没有OSI核准也没有归于FSF中，有待验证。

考虑开源推广和长期使用，建议采用经OSI或FSF认可的License。

## 总结：

中小开源Apache License2.0利于推广

大型开源GPL3.0利于保持后续版本开源

简单开源MIT简单省事没有什么限制条款

_声明：本文仅代表作者个人观点，请自行斟酌使用。_