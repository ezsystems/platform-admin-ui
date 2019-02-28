<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\UI\Config\Provider\Module;

use eZ\Publish\Core\MVC\ConfigResolverInterface;
use EzSystems\EzPlatformAdminUi\UI\Config\ProviderInterface;

class ContentTree implements ProviderInterface
{
    /** @var \eZ\Publish\Core\MVC\ConfigResolverInterface */
    private $configResolver;

    /**
     * @param \eZ\Publish\Core\MVC\ConfigResolverInterface $configResolver
     */
    public function __construct(
        ConfigResolverInterface $configResolver
    ) {
        $this->configResolver = $configResolver;
    }

    /**
     * @return array
     */
    public function getConfig(): array
    {
        return [
            'loadMoreLimit' => $this->configResolver->getParameter('content_tree_module.load_more_limit'),
            'childrenLoadMaxLimit' => $this->configResolver->getParameter('content_tree_module.children_load_max_limit'),
            'treeMaxDepth' => $this->configResolver->getParameter('content_tree_module.tree_max_depth'),
            'contentTypeIgnoreList' => $this->configResolver->getParameter('content_tree_module.content_type_ignore_list'),
        ];
    }
}
