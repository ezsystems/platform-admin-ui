<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace Ibexa\AdminUi\Form\Type\Section;

use Ibexa\AdminUi\Form\Data\Section\SectionUpdateData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SectionUpdateType extends AbstractType
{
    /** @var SectionType */
    protected $sectionType;

    /**
     * @param SectionType $sectionType
     */
    public function __construct(SectionType $sectionType)
    {
        $this->sectionType = $sectionType;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->sectionType->buildForm($builder, $options);

        $builder
            ->add('update', SubmitType::class, [
                'label' => /** @Desc("Update") */
                    'section_update_form.update',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $this->sectionType->configureOptions($resolver);

        $resolver->setDefaults([
            'data_class' => SectionUpdateData::class,
            'translation_domain' => 'forms',
        ]);
    }
}

class_alias(SectionUpdateType::class, 'EzSystems\EzPlatformAdminUi\Form\Type\Section\SectionUpdateType');
